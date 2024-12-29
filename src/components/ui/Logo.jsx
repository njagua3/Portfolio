import { Code } from 'lucide-react';

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Code className="w-6 h-6 text-blue-600" />
      <span className="font-bold text-gray-900 dark:text-white">
        KEVIN<span className="text-blue-600">.dev</span>
      </span>
    </div>
  );
}