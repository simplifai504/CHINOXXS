"use client"
import React, { useState, useRef, useEffect } from 'react';
import Konva from "konva";
import { Stage, Layer, Image as KonvaImage, Transformer } from 'react-konva';
import { KonvaEventObject, Node, NodeConfig } from 'konva/lib/Node';
import { getRandomArbitrary } from '@/lib/utils';
import { Ban, Check, Copy, ImageDown, ImagePlus, RotateCcw, Trash2, } from 'lucide-react';

interface Sticker {
  id: number;
  image: HTMLImageElement;
  x: number;
  y: number;
  width: number;
  height: number;
  rotation: number;
  scaleX: number;
  scaleY: number;
}

interface MainImage {
  image: HTMLImageElement;
  width: number;
  height: number;
}

interface Filter {
  image: HTMLImageElement;
  id: number;
}

const stickerTemplates = new Array(43).fill(1);

const MemeGenerator = () => {
  const [mainImage, setMainImage] = useState<MainImage | null>(null);
  const [stickers, setStickers] = useState<Array<Sticker>>([]);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [selectedFilter, setSelectedFilter] = useState<Filter | null>(null);
  const [copied, setCopied] = useState<boolean>(false);
  const stageRef = useRef<Konva.Stage>(null);
  const mainImageRef = useRef<Konva.Image>(null);
  const filterRef = useRef<Konva.Image>(null);
  const transformerRef = useRef<Konva.Transformer>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const checkDeselect = (e: KonvaEventObject<MouseEvent, Node<NodeConfig>> | KonvaEventObject<TouchEvent>) => {
    console.log({ e })
    const clickedOnMainImage = mainImageRef.current === e.target;
    const clickedOnFilter = filterRef.current === e.target;
    if (clickedOnFilter || clickedOnMainImage) {
      setSelectedId(null);
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new window.Image();
        img.onload = () => {
          setMainImage({
            image: img,
            width: img.width,
            height: img.height
          });
          setStickers([]);
        };
        img.src = event.target?.result as string;
      };
      reader.readAsDataURL(file);
    }
  };

  const addRandomSticker = () => {
    const number = Number(getRandomArbitrary(5, 10).toFixed(0));
    for (let index = 0; index < number; index++) {
      const imageIndex = getRandomArbitrary(0, 32).toFixed(0);
      const img = new window.Image();
      const imgScale = getRandomArbitrary(0.5, 2);
      img.onload = (e) => {
        img.width
        const newSticker = {
          id: Math.random(),
          image: img,
          x: getRandomArbitrary(0, mainImage?.width ?? 800),
          y: getRandomArbitrary(0, mainImage?.width ?? 600),
          width: img.width / 4,
          height: img.height / 4,
          rotation: getRandomArbitrary(0, 360),
          scaleX: imgScale,
          scaleY: imgScale
        };
        setStickers((prev) => [...prev, newSticker]);
      };
      img.src = `/meme-gen/sticker-${imageIndex}.webp`;
    }
  }

  const addSticker = (stickerSrc: string) => {
    const img = new window.Image();
    img.onload = (e) => {
      const newSticker = {
        id: Date.now(),
        image: img,
        x: 100,
        y: 100,
        width: img.width / 4,
        height: img.height / 4,
        rotation: 0,
        scaleX: 1,
        scaleY: 1
      };
      setStickers([...stickers, newSticker]);
    };
    img.src = stickerSrc;
  };

  const handlerFilterSelect = (index: number) => {
    const img = new window.Image();
    img.onload = (_e) => {
      setSelectedFilter({
        id: index,
        image: img,
      })
    }
    img.src = `/meme-gen/filters/filter-${index}.webp`;
  }

  const deleteSelected = () => {
    if (selectedId) {
      setStickers(stickers.filter(s => s.id !== selectedId));
      setSelectedId(null);
    }
  };

  const copyImage = () => {
    if (transformerRef.current) {
      transformerRef.current.nodes([]);
      transformerRef.current.getLayer()?.batchDraw();
    }
    if (stageRef.current) {
      const blob = stageRef.current.toBlob({
        callback: async (blob) => {
          if (!blob) return;
          await navigator.clipboard.write([
            new ClipboardItem({
              [blob.type as string]: blob,
            })
          ])

          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        }
      });
    }
  }

  const downloadImage = () => {
    if (transformerRef.current) {
      transformerRef.current.nodes([]);
      transformerRef.current.getLayer()?.batchDraw();
    }
    if (stageRef.current) {
      const uri = stageRef.current.toDataURL();
      const link = document.createElement('a');
      link.download = 'meme.png';
      link.href = uri;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setSelectedId(null);
    }
  };

  const share = () => {

  }

  const scale = (() => {
    if (!mainImage) return 1;
    const MAX_WIDTH = 800;
    const MAX_HEIGHT = 600;

    const scaleX = MAX_WIDTH / mainImage.width;
    const scaleY = MAX_HEIGHT / mainImage.height;

    const scale = Math.min(scaleX, scaleY);

    return scale;
  })()

  // Configurar transformer
  useEffect(() => {
    if (selectedId && transformerRef.current) {
      const selectedNode = stageRef.current?.findOne(`#sticker-${selectedId}`);
      if (selectedNode) {
        transformerRef.current.nodes([selectedNode]);
        transformerRef.current.getLayer()?.batchDraw();
      }
    } else if (transformerRef.current) {
      transformerRef.current.nodes([]);
      transformerRef.current.getLayer()?.batchDraw();
    }
  }, [selectedId]);

  return (
    <div className="min-h-screen bg-2 text-white relative overflow-hidden font-pixel">
      <div className="relative z-10 p-6">
        {/* Header */}
        <div className="text-center mb-8 relative">
          <h1 className="text-6xl font-bold text-cyan-400 mb-2 tracking-wider">
            NSDEX
          </h1>
          <h2 className="text-4xl text-cyan-300 font-semibold">
            MEME GEN
          </h2>
          <div className="flex items-center justify-center gap-4 mt-4 absolute top-1/2 left-1/4">
            <a href="/" className="text-2xl text-cyan-400">HOME</a>
          </div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center gap-6">
            {/* Panel de imagen principal */}
            <div className="">
              <div className="bg-slate-800/80 border-2 border-[#3366cc] rounded-lg p-4">
                <div className="flex items-center justify-between mb-4">
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="grid place-content-center h-10 w-10 disabled:opacity-30 border-2 rounded-sm border-[#05b0b9]"
                    title="Delete selected sticker"
                  >
                    <ImagePlus color='#05b0b9' />
                  </button>
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        setSelectedFilter(null);
                        setStickers([])
                      }}
                      className="grid place-content-center h-10 w-10 disabled:opacity-30 border-2 rounded-sm border-[#05b0b9]"
                      title="Reset Image"
                      disabled={!(stickers.length > 0) || !!selectedFilter}
                    >
                      <RotateCcw color='#05b0b9' />
                    </button>
                    <button
                      onClick={deleteSelected}
                      className="grid place-content-center h-10 w-10 disabled:opacity-30 border-2 rounded-sm border-[#05b0b9]"
                      title="Download"
                      disabled={!selectedId}
                    >
                      <Trash2 color='#05b0b9' />
                    </button>
                    <button
                      onClick={downloadImage}
                      className="grid place-content-center h-10 w-10 disabled:opacity-30 border-2 rounded-sm border-[#05b0b9]"
                      title="Download"
                      disabled={!mainImage}
                    >
                      <ImageDown color='#05b0b9' />
                    </button>
                    <button
                      onClick={copyImage}
                      className="grid place-content-center h-10 w-10 disabled:opacity-30 border-2 rounded-sm border-[#05b0b9]"
                      title="Copy"
                      disabled={!mainImage}
                    >
                      {
                        copied ? <Check color='#05b0b9' />
                          : <Copy color='#05b0b9' />
                      }

                    </button>
                  </div>
                </div>

                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={(handleImageUpload)}
                  className="hidden"
                />

                <div className={`${!mainImage && "border-2 border-dashed border-[#3366cc]/50 rounded-lg"} mb-4`} style={{ minHeight: '600px', }}>
                  <Stage
                    width={mainImage?.width ? mainImage?.width * scale : 800}
                    height={mainImage?.height ? mainImage?.height * scale : 600}
                    onMouseDown={(checkDeselect)}
                    onTouchStart={checkDeselect}
                    ref={stageRef}
                  >
                    <Layer>
                      {/* Imagen principal */}
                      {mainImage && (
                        <KonvaImage
                          ref={mainImageRef}
                          image={mainImage.image}
                          width={mainImage.width}
                          height={mainImage.height}
                          scaleX={scale}
                          scaleY={scale}
                        />
                      )}

                      {/* Stickers */}
                      {stickers.map((sticker) => (
                        <KonvaImage
                          key={sticker.id}
                          id={`sticker-${sticker.id}`}
                          image={sticker.image}
                          x={sticker.x}
                          y={sticker.y}
                          width={sticker.width}
                          height={sticker.height}
                          rotation={sticker.rotation}
                          scaleX={sticker.scaleX}
                          scaleY={sticker.scaleY}
                          draggable
                          onClick={() => setSelectedId(sticker.id)}
                          onTap={() => setSelectedId(sticker.id)}
                          onDragEnd={(e) => {
                            const updatedStickers = stickers.map(s =>
                              s.id === sticker.id
                                ? { ...s, x: e.target.x(), y: e.target.y() }
                                : s
                            );
                            setStickers(updatedStickers);
                          }}
                          onTransformEnd={(e) => {
                            const node = e.target;
                            const updatedStickers = stickers.map(s =>
                              s.id === sticker.id
                                ? {
                                  ...s,
                                  x: node.x(),
                                  y: node.y(),
                                  rotation: node.rotation(),
                                  scaleX: node.scaleX(),
                                  scaleY: node.scaleY()
                                }
                                : s
                            );
                            setStickers(updatedStickers);
                          }}
                        />
                      ))}

                      {/* Transformer */}
                      <Transformer
                        centeredScaling
                        ref={transformerRef}
                      />
                      {
                        selectedFilter ?
                          <KonvaImage
                            ref={filterRef}
                            image={selectedFilter.image}
                          />
                          : null
                      }

                    </Layer>
                  </Stage>
                </div>
                <button
                  onClick={addRandomSticker}
                  className="h-10 disabled:opacity-30 pr-2"
                  title="Random"
                  disabled={!mainImage}
                >
                  <img src="/ui/random.webp" alt="" className='h-full' />
                </button>
                <button
                  onClick={share}
                  className="h-10 disabled:opacity-30"
                  title="Share"
                  disabled={!mainImage}
                >
                  <img src="/ui/share.webp" alt="" className='h-full' />
                </button>
              </div>
            </div>

            {/* Panel de stickers */}
            <div className="w-[404px]">
              <div className="bg-slate-800/80 border-2 border-[#3366cc] rounded-lg p-4">
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Filters</h3>
                <div className="flex flex-row flex-wrap gap-3 mb-4">
                  <button
                    key={`filter-button-none`}
                    onClick={() => setSelectedFilter(null)}
                    className='w-16 h-16 bg-gray-700/30 flex justify-center items-center group border-2 border-transparent rounded-lg aria-selected:border-[#3366cc]'
                    aria-selected={selectedFilter === null}
                  >
                    <Ban className='text-gray-400' />
                  </button>
                  {
                    Array(5).fill(1).map((_, index) => (
                      <button
                        key={`filter-button-${index}`}
                        onClick={() => handlerFilterSelect(index)}
                        className='w-16 h-16 flex justify-center items-center group rounded-lg border-2 border-transparent aria-selected:border-[#3366cc]'
                        aria-selected={selectedFilter?.id === index}
                      >
                        <img
                          src={`/meme-gen/filters/filter-${index}.webp`}
                          alt={`filter ${index}`}
                          className={'group-first:h-fit ' + (index > 35 ? 'h-fit' : 'h-full')}
                        />
                      </button>
                    ))
                  }
                </div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Stickers</h3>
                <div className="flex flex-row flex-wrap gap-3">
                  {stickerTemplates.map((sticker, index) => (
                    <button
                      key={`sticker-button-${index}`}
                      onClick={() => addSticker(`/meme-gen/sticker-${index}.webp`)}
                      className='w-16 h-16 flex justify-center items-center group'
                    >
                      <img
                        src={`/meme-gen/sticker-${index}.webp`}
                        alt={`sticker-${index}`}
                        className={'group-first:h-fit ' + (index > 35 ? 'h-fit' : 'h-full')}
                      />
                    </button>
                  ))}
                </div>

                <div className="mt-6 text-xs text-cyan-400/70">
                  <div className="mb-2">💡 Tips:</div>
                  <div className="space-y-1">
                    <div>• Click to select stickers</div>
                    <div>• Drag to move</div>
                    <div>• Use corners to resize/rotate</div>
                    <div>• Trash button to delete</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default MemeGenerator;