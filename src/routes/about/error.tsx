function AboutError(): JSX.Element {
  return (
    <section className="container flex flex-col items-center justify-center gap-4 py-24 text-center">
      <h2 className="text-2xl font-semibold text-destructive">Unable to load tech stack</h2>
      <p className="max-w-md text-sm text-muted-foreground">
        Please check your connection and refresh the page. We will restore access as soon as possible.
      </p>
    </section>
  );
}

export default AboutError;
