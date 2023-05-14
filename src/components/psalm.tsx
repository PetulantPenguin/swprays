import styles from './psalm.module.scss';

export default function Psalm({
  canonical,
  psalm,
}: {
  canonical: string;
  psalm: any;
}) {
  return (
    <div className="pb-8">
      <div className="min-h-[112px]">
        <iframe
          src={`https://www.esv.org/audio-player/${canonical}/`}
          className="h-28 w-full border-0"
        ></iframe>
      </div>
      <div
        className={styles.psalm}
        dangerouslySetInnerHTML={{ __html: psalm }}
      />
    </div>
  );
}
