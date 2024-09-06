// the navbar is inside the layout.js, not inside a page component, so the next 'Suspense'
// boundary doesn't wrap the navbar, and it loads instantly

export default function Loading() {
  return (
    <>
      <div>
        <h2>Loading...</h2>
      </div>
    </>
  )
}
