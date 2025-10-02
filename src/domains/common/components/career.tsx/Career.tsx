export default function Career() {
  return (
    <div id='career' className='bg-gray-200 scroll-mt-[48px]'>
      <section>
        <h1 className='text-4xl font-black text-center mb-2'>Career</h1>
        <div>
          <h2 className='my-2 text-xl font-bold'>경력 및 교육 이력</h2>
          <div className='mb-3'>
            <h2 className='my-2 font-bold'>경력</h2>
            <div className='flex gap-2 flex-col md:flex-row md:gap-4'>
              <p>- 2021.05 - 2024.07</p>
              <div>
                <p>오렌지아이 개발팀 근무 (총 3년 3개월)</p>
                <p>삼성 SDI 그룹사 내부 프로그램 개발</p>
                <p>(JavaScript, jQuery, HTML, CSS, Git)</p>
              </div>
            </div>
          </div>
          <div>
            <h2 className='my-2 font-bold'>교육</h2>
            <div className='flex gap-2 flex-col md:flex-row md:gap-4'>
              <p>- 2025.02 - 2025.09</p>
              <div>
                <p>React 기반 프론트엔드 개발자 취업 특화 과정</p>
                <p>Next.js, TypeScript, React, JavaScript, HTML, CSS 학습</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
