function HomeError(): JSX.Element {
  return (
    <section className="container flex flex-col items-center justify-center gap-4 py-24 text-center">
      <h2 className="text-2xl font-semibold text-destructive">Unable to load profile</h2>
      <p className="max-w-md text-sm text-muted-foreground">
        Try refreshing the page in a moment. We are already looking into the issue.
      </p>
    </section>
  );
}

export default HomeError;
