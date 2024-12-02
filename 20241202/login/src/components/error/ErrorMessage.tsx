export default function ErrorMessage({ error }: { error: string }) {
  return <div className="text-sm text-rose-500 font-semibold">{error}</div>;
}
