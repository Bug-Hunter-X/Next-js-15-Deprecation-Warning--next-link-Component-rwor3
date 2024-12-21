```javascript
import Link from 'next/link';

function MyComponent() {
  return (
    <div>
      <Link href="/about">
        <a>About Us</a>
      </Link>
    </div>
  );
}

export default MyComponent;
```
This code produces a warning in Next.js 15:  `Warning: You are using a deprecated version of the next/link component. Please use the new version, which uses a different API.`