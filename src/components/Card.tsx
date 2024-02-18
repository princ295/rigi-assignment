import { Card as CardComponent } from '@mui/joy';
import CardCover from '@mui/joy/CardCover';
import { useRef, useState, useEffect } from 'react';
import { ModalBlock } from './ModalBlock';

export const Card = (props: any) => {

  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null)


  const [isvideoClicked, setIsvideoClicked] = useState(false);

  useEffect(() => {

    if (videoRef.current == null) return

    if (isVideoPlaying) {
      // videoRef.current.currentTime = 0
      videoRef.current.play()
      videoRef.current.muted = true

    } else {
      videoRef.current.pause()
    }

  }, [isVideoPlaying])
  console.log(props)

  return (
    <>

      <CardComponent
        sx={{
          minWidth: 270, flexGrow: 1, cursor: 'pointer',
          height: 180
        }}
        onMouseEnter={() => setIsVideoPlaying(true)}
        onMouseLeave={() => setIsVideoPlaying(false)}
        onClick={() => setIsvideoClicked(true)}
      >
        <CardCover>
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            controls={false}
            poster={props.thumb}
          >
            <source
              src={props.sources}
              type="video/mp4"
            />
          </video>
        </CardCover>
      </CardComponent>
      <ModalBlock videoRef={videoRef.current} isVisible={isvideoClicked} close={() => setIsvideoClicked(false)}>
        <CardComponent
          sx={{
            minWidth: 670, flexGrow: 1, cursor: 'pointer',
            height: 360
          }}
        >
          <CardCover>
            <video
              ref={videoRef}
              autoPlay
              loop

              id='video-palyed'
              controls={isvideoClicked}
              poster={props.thumb}
            >
              <source
                src={props.sources}
                type="video/mp4"
              />
            </video>
          </CardCover>
        </CardComponent>
      </ModalBlock>
    </>
  )
}

