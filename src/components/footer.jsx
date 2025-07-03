export function Footer() {
    return (
      <footer className="bg-gray-100 text-gray-700 py-6 mt-[80rem]">
        <div className="max-w-7xl mx-auto px-4 text-center space-y-2">
          <h2 className="text-xl font-semibold">Epyc Tools</h2>
          <p className="text-sm text-gray-600">
            A simple task management tool to streamline your workflow.
          </p>
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Epyc Tools. Made by Yolo_Twice.
          </p>
        </div>
      </footer>
    );
  }
  