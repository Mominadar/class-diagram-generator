import domtoimage from "dom-to-image";
import Board from "../components/Board";
import { initialEdges, initialNodes } from "../components/initialElements";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import { trpc } from "../utils/trpc";

export default function IndexPage() {
  const hello = trpc.useQuery(["hello", { text: "client" }]);

  const handleAddClass = () => {};
  const handleAddAttribute = () => {
    const newNode = {
      id: "node-1",
      type: "classNode",
      position: { x: 0, y: 0 },
      data: { value: 123 },
    };
    
  };
  const handleSave = () => {};
  const handleDownload = () => {
    console.log("savinggg");
    const node = document.getElementById("board")!;
    domtoimage
      .toPng(node)
      .then(function (dataUrl) {
        var img = new Image();
        img.src = dataUrl;
        document.body.appendChild(img);
      })
      .catch(function (error) {
        console.error("oops, something went wrong!", error);
      });
  };

  if (!hello.data) {
    return <div>Loading...</div>;
  }
  return (
    <div className="flex flex-col min-h-screen bg-gray-dark">
      <Navbar />
      <div className="grid grid-cols-4  bg-gray-dark min-h-full flex-1">
        <div className="col-span-1">
          <SideBar
            handleAddClass={handleAddClass}
            handleAddAttribute={handleAddAttribute}
            handleDownload={handleDownload}
            handleSave={handleSave}
          />
        </div>
        <div className="col-span-3">
          <Board initialNodes={initialNodes} initialEdges={initialEdges} />
        </div>
      </div>
      <footer className="flex-grow-1 text-center text-gray-light py-3">
        Created by Momina Babar
      </footer>
    </div>
  );
}
