import { FeedbackType, FEEDBACK_TYPES } from "..";

interface FeedbackTypeStepProps {
  onFeedbackTypeSelected: (feedbackType: FeedbackType) => void;
}

export function FeedbackTypeStep({ onFeedbackTypeSelected }: FeedbackTypeStepProps) {
  return (
    <div className='flex py-8 gap-2 w-full'>
      {Object.entries(FEEDBACK_TYPES).map(([key, value]) => (
        <button
          key={key}
          className='bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none'
          onClick={() => onFeedbackTypeSelected(key as FeedbackType)}
        >
          <img src={value.image.source} alt={value.image.alt} />
          <span >{value.title}</span>
        </button>
      ))}
    </div>
  );
}