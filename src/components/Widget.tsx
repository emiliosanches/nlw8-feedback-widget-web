import { ChatTeardropDots } from 'phosphor-react';
import { useState } from 'react';

export function Widget() {
  const [isWidgetOpen, setIsWidgetOpen] = useState<boolean>();

  function toggleWidgetVisibility() {
    setIsWidgetOpen(v => !v);
  }

  return (
    <div className='absolute bottom-4 right-4'>
      {isWidgetOpen && (
        <p>Hello World!</p>
      )}

      <button className='bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group' onClick={toggleWidgetVisibility}>
        <ChatTeardropDots className='h-6 w-6' />
        <span className='max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear'>
          <span className='pl-2'></span>
          Feedback
        </span>
      </button>
    </div>
  );
}