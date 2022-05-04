import { useState } from "react";
import { CloseButton } from "../CloseButton";
import BugIcon from '../../assets/bug.svg';
import IdeaIcon from '../../assets/idea.svg';
import ThoughtIcon from '../../assets/thought.svg';
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";

export const FEEDBACK_TYPES = {
  BUG: {
    title: 'Problema',
    image: {
      source: BugIcon,
      alt: 'Imagem de um inseto'
    }
  },
  IDEA: {
    title: 'Ideia',
    image: {
      source: IdeaIcon,
      alt: 'Imagem de uma lâmpada'
    }
  },
  OTHER: {
    title: 'Outro',
    image: {
      source: ThoughtIcon,
      alt: 'Imagem de um balão de pensamento'
    }
  }
}

export type FeedbackType = keyof typeof FEEDBACK_TYPES;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);

  return (
    <div className='bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto'>
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>
        <CloseButton />
      </header>

      {!feedbackType ? (
        <FeedbackTypeStep onFeedbackTypeSelected={setFeedbackType} />
      ) : (
        <FeedbackContentStep />
      )}

      <footer>Feito com ♥ por <a className="underline underline-offset-2" href="https://linked.in/emiliosanches">Emilio Sanches</a></footer>
    </div>
  );
}
