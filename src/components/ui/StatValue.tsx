import { useCountUp } from '../../hooks/useCountUp';

export function StatValue({ value, className }: { value: string; className?: string }) {
  const { ref, display } = useCountUp(value);
  return (
    <dd ref={ref} className={className}>
      {display}
    </dd>
  );
}
