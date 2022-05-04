import { ArrowLeft, Camera } from "phosphor-react";
import { useState } from "react";
import { FeedbackType, FEEDBACK_TYPES } from "..";
import { CloseButton } from "../../CloseButton";
import { ScreenshotButton } from "../ScreenshotButton";

interface FeedbackContentStepProps {
  feedbackType: FeedbackType;
  onRestartFeedbackRequested: () => void;
}

export function FeedbackContentStep({ feedbackType, onRestartFeedbackRequested }: FeedbackContentStepProps) {
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [comment, setComment] = useState('');

  const feedbackTypeInfo = FEEDBACK_TYPES[feedbackType]

  function handleSubmitFeedback(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log(screenshot)
    console.log(comment)
  }

  return (
    <>
      <header>
        <button
          type='button'
          onClick={onRestartFeedbackRequested}
        >
          <ArrowLeft weight='bold' className='w-4 h-4 top-5 left-5 absolute text-zinc-400 hover:text-zinc-100' />
        </button>

        <span className="text-xl leading-6 flex items-center gap-2">
          <img src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt} className='w-6 h-6' />
          {feedbackTypeInfo.title}
        </span>

        <CloseButton />
      </header>

      <form
        className='my-4 w-full'
        onSubmit={handleSubmitFeedback}
      >
        <textarea
          className='min-w-[304px] w-full min-h-[102px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 resize-none focus:outline-none scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin'
          placeholder='Conte com detalhes o que está acontecendo...'
          onChange={(e) => setComment(e.target.value)}
        />

        <footer className='flex gap-2 mt-2'>
          <ScreenshotButton screenshot={screenshot} onScreenshotTook={setScreenshot} />

          <button
            type='submit'
            disabled={comment.length === 0}
            className='p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500'
          >
            Enviar feedback
          </button>
        </footer>
      </form>
    </>
  );
}