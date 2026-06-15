import React from "react";

export function renderText(input: string): React.ReactNode[] {
  const lines = input.split("\n");

  return lines.map((line, i) => {
    // Code block (triple backticks)
    if (line.trim().startsWith("```")) {
      const code = line.replace(/```/, "").trim();
      return (
        <pre key={i} className="bg-gray-800 text-white p-3 rounded my-3">
          <code className="bg-neutral-600">{code}</code>
        </pre>
      );
    }

    if (line.trim().startsWith("#")) {
      let heading = 0;
      for (let w = 0; w < line.length; w++) {
        if (line[w] === "#") {
          heading += 1;
        } else break;
      }
      return heading === 1 ? (
        <h1 className="text-2xl font-bold">{line.replace("#", "").trim()}</h1>
      ) : heading === 2 ? (
        <h2 className="text-xl font-bold">{line.replace("##", "").trim()}</h2>
      ) : (
        <h3 className="text-lg font-semibold">
          {line.replace("###", "").trim()}
        </h3>
      );
    }

    // Parse inline elements in a line
    const segments: React.ReactNode[] = [];
    let remaining = line;

    while (remaining.length) {
      // **bold**
      const boldMatch = remaining.match(/\*\*(.*?)\*\*/);
      if (boldMatch) {
        const [full, text] = boldMatch;
        const index = boldMatch.index!;

        if (index > 0) segments.push(remaining.slice(0, index));

        segments.push(
          <strong key={i + "-b-" + index} className="font-bold">
            {text}
          </strong>,
        );

        remaining = remaining.slice(index + full.length);
        continue;
      }

      // `inline code`
      const codeMatch = remaining.match(/`(.*?)`/);
      if (codeMatch) {
        const [full, text] = codeMatch;
        const index = codeMatch.index!;

        if (index > 0) segments.push(remaining.slice(0, index));

        segments.push(
          <code
            key={i + "-c-" + index}
            className="bg-gray-200 px-1 py-0.5 rounded mx-1 text-sm"
          >
            {text}
          </code>,
        );

        remaining = remaining.slice(index + full.length);
        continue;
      }

      // No more patterns
      segments.push(remaining);
      break;
    }

    return (
      <p key={i} className="my-2">
        {segments}
      </p>
    );
  });
}
