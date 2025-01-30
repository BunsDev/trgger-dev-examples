import { processImage } from "./actions/process-image";

export default function Home() {
  return (
    <main className="grid grid-rows-[1fr_auto] min-h-screen items-center justify-center w-full bg-black">
      <div className="flex flex-col gap-12 items-center">
        <h1 className="text-gray-200 text-4xl max-w-xl text-center font-bold">
          Generate an image using the Vercel AI SDK (Dall-E 3)
        </h1>

        <form
          action={processImage}
          className="flex flex-col gap-4 w-full max-w-md"
        >
          <select
            name="imageModel"
            className="px-2 py-2 rounded border border-gray-700 bg-gray-900 text-white pr-10"
            required
            defaultValue="dall-e-3"
          >
            <option value="" disabled>
              Select an image model
            </option>
            <option value="dall-e-3">DALL-E 3</option>
            <option value="dall-e-2">DALL-E 2</option>
          </select>
          <textarea
            name="prompt"
            placeholder="Write a prompt"
            className="px-4 py-2 h-40 rounded border border-gray-700 bg-gray-900 text-white resize-none"
            required
          />
          <button
            type="submit"
            className="bg-white text-black px-4 py-2 rounded-full disabled:opacity-50"
          >
            Submit
          </button>
        </form>
      </div>
    </main>
  );
}
