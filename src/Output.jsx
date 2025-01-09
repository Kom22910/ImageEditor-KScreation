


import React, { StrictMode } from 'react';
// import html2canvas from 'html2canvas';

const Output = ({ data, PositionData, textData }) => {

    const { url, height, widht, grayscale, blur, bright, constrast, hue, invert, opacity, saturate, radius } = data;
    const { topBottom, leftRight } = PositionData;
    const { words, fs, fw, w, clr, bgclr, bgOp , txOp , pTop , pLeft } = textData;


    function hexToRgba(hex) {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

        return result ? {
            
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16),
            a : 1
        } : null;
    }

    const bgColor = hexToRgba(bgclr);
    let txColor = hexToRgba(clr);

    // const ref = useRef(null);
    // let count = 0;
    // const CaptureImage = async () => {
    //     try {

    //         const canvas = await html2canvas(ref.current , {
    //             allowTaint : true,
    //             scale : 4,
    //             useCORS : true
    //         });
    //         const dataUrl = canvas.toDataURL('image/png');
    //         const link = document.createElement('a');
    //         link.href = dataUrl;
    //         count === 0 ? (
    //             link.download = `screenshot${count}.png`
    //         ) : (link.download = `screenshot${count}.png`)
    //         document.body.appendChild(link);
    //         link.click();
    //         document.body.removeChild(link);

    //         count++;
    //     } catch (error) {
    //         alert(error);
    //         console.error(error)
    //     }
    // }

    return (
        <StrictMode>

            <div className="col-sm-8 col-11 mx-sm-0 mx-auto py-2 ouputpage">

                <div className="col-12 py-4 imageouput text-center" >
                    <div className="row">
                        <img src={url} alt="" key={data.id} id='imageouput' style={
                            {
                                width: `${widht}px`,
                                height: `${height}px`,
                                filter: `brightness(${bright}) blur(${blur}px) contrast(${constrast}) grayscale(${grayscale}%) hue-rotate(${hue}deg) invert(${invert}%) opacity(${100 - opacity}%) saturate(${saturate})`,
                                borderRadius: `${radius}% `,
                                position: 'relative',
                                top: `${topBottom}vh`,
                                left: `${leftRight}vw`
                            }
                        } />

                    </div>


                    <p style={{
                        width: `${w}%`,
                        color: `rgba(${txColor.r} , ${txColor.g} , ${txColor.b}, ${txOp})`,
                        backgroundColor: `rgba(${bgColor.r}, ${bgColor.g}, ${bgColor.b}, ${bgOp})`,
                        fontSize: `${fs}px`,
                        fontWeight: `${fw}`,
                        top : `${pTop}%`,
                        left : `${pLeft}%`

                    }}>
                        {words}
                    </p>


                </div>
            </div>

        </StrictMode>
    )
}

export default Output;