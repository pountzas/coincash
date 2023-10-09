type CloseButtonProps = {
  close: () => void;
}

function CloseButton({close}: CloseButtonProps) {
  return (
    <div onClick={() => close()} className='absolute top-1 right-1 bg-white rounded-full w-5 h-5 flex flex-col items-center justify-center cursor-pointer'>x</div>
  )
}

export default CloseButton