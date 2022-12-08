type Params = {
  scriptId: string;
  src?: string;
  innerHTML?: string;
  async?: boolean;
  defer?: boolean;
  callback?: () => void;
};

export const loadScript = ({
  scriptId,
  src,
  innerHTML,
  async = true,
  defer = true,
  callback,
}: Params) => {
  if (typeof window === "undefined") {
    return;
  }

  const existingScript = document.getElementById(scriptId);

  if (!existingScript) {
    const script = document.createElement("script");

    if (src) {
      script.src = src;
    }

    if (innerHTML) {
      script.innerHTML = innerHTML;
    }

    script.async = async;
    script.defer = async;

    script.id = scriptId;

    document.body.appendChild(script);

    script.onload = () => {
      if (callback) {
        callback();
      }
    };
  }

  if (existingScript && callback) {
    callback();
  }
};
