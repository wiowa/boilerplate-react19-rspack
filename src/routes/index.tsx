import { createFileRoute } from '@tanstack/react-router'
import { default as ReactLogo } from "../assets/react.svg";
import { create } from "zustand";
import "../App.css";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute('/')({
  component: Index,
})

interface StoreState {
  count: number;
  increment: () => void;
}

const useStore = create<StoreState>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}));

function Index() {
  const { count, increment } = useStore();

  return (
    <div className="p-2">

      <div className="App">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-3xl text-red-500 space-grotesk-bold">
            Hello worlg!
          </h1>
          <a href="https://reactjs.org" target="_blank" rel="noreferrer">
            <img src={ReactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Rspack + React</h1>
        <div className="card">
          <Button variant="outline" type="button" onClick={() => increment()}>
            countg is {count}
          </Button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Rspack and React logos to learn more
        </p>
      </div>
    </div>
  )
}