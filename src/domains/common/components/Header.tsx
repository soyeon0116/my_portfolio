export default function Header() {
  return (
    <div className='fixed top-0 left-0 right-0 bg-white h-12 p-2 border-b border-b-gray-200 flex gap-3 justify-between items-center z-50'>
      <a href='#intro' className='font-bold'>
        SOYEON
      </a>
      <nav className='flex gap-4 font-semibold'>
        <a href='#aboutMe'>About Me</a>
        <a href='#career'>Career</a>
        <a href='#project'>Project</a>
      </nav>
    </div>
  );
}
