function AboutError(): JSX.Element {
  return (
    <section className="container flex flex-col items-center justify-center gap-4 py-24 text-center">
      <h2 className="text-2xl font-semibold text-destructive">Не удалось загрузить стек</h2>
      <p className="max-w-md text-sm text-muted-foreground">
        Проверьте соединение и обновите страницу. Мы восстановим доступ в ближайшее время.
      </p>
    </section>
  );
}

export default AboutError;
