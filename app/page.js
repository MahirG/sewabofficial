import fs from "node:fs";
import path from "node:path";
import Script from "next/script";

export const dynamic = "force-static";

function readLegacyHomepage() {
  const sourcePath = path.join(process.cwd(), "index.html");
  const source = fs.readFileSync(sourcePath, "utf8");

  const styles = source.match(/<style[^>]*>([\s\S]*?)<\/style>/i)?.[1];
  const body = source.match(/<body[^>]*>([\s\S]*?)<\/body>/i)?.[1];

  if (!styles || !body) {
    throw new Error("The original index.html is missing its style or body section.");
  }

  const scripts = Array.from(
    source.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/gi),
    (match) => match[1],
  );

  const interactionScript =
    scripts.find((script) => script.includes("Intro animation / preloader")) ?? "";

  return {
    styles,
    markup: body.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "").trim(),
    interactionScript,
  };
}

export default function HomePage() {
  const { styles, markup, interactionScript } = readLegacyHomepage();

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <div
        id="sewab-homepage"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: markup }}
      />
      {interactionScript ? (
        <Script
          id="sewab-site-interactions"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: interactionScript }}
        />
      ) : null}
      {process.env.VERCEL ? (
        <>
          <Script id="vercel-speed-insights-init" strategy="afterInteractive">
            {`window.si=window.si||function(){(window.siq=window.siq||[]).push(arguments);};`}
          </Script>
          <Script src="/_vercel/speed-insights/script.js" strategy="afterInteractive" />
        </>
      ) : null}
    </>
  );
}
