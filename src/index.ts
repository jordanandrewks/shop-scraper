const world = 'world';

export function hello(who: string = world): string {
  return `Hello ${who}! `;
}

// run project as async"
// async IIFE - Immediately Invoke Function Expression. "Runs as soon as it's been defined"

(async () => {
  console.log('yo');
})();