import React from 'react';
import Container from './helpers/Container';
import { testifiersList } from './helpers/testifiersList'
import Button from './helpers/Button'

const Experience = () => {

  const testifiers = testifiersList;

  return (
    <section className='flex flex-col items-center '>
      <Container>
        <div class="grid sm:grid-cols-3  w-full mt-[4rem]">

          {testifiers.map((testifier) => (
            <div className='flex flex-col items-center my-[2rem] '>
              <div>
                <img className='w-[200px]' src={testifier.image} alt={testifier.name} />
              </div>
              <div className='mt-[2rem] px-12'>
                <p className='font-inter font-600 text-[24px]'>
                  {testifier.name}
                </p>
                <div className='flex gap-4 mb-4 '>
                  <p>In {testifier.location}</p>
                  <Button text={testifier.identity} />
                </div>
                <div>
                  <p className='text-[16px] '>{testifier.testimony} </p>
                </div>
              </div>
            </div>
          ))}

        </div>
      </Container>
    </section>
  )
}

export default Experience