interface SocialButtonProps {
  name: string;
  spacing?: string;
  showLabel?: boolean;
}

export default function SocialButton({
  name,
  spacing,
  showLabel
}: SocialButtonProps) {
  return (
    <a
      href={
        name === 'twitter'
          ? 'https://twitter.com/mr_amed'
          : 'https://github.com/ahmedfaaid'
      }
      className={`flex items-center text-4xl p-4 rounded dark:hover:bg-[#161e66] hover:bg-[#eaecfa] dark:text-white transition-colors duration-300 ease-in-out ${spacing}`}
      target='_blank'
      rel='noreferrer noopener'
    >
      <i
        className={
          name === 'twitter'
            ? 'devicon-twitter-original'
            : 'devicon-github-original'
        }
      />
      {showLabel && (
        <span className='ml-2 text-2xl'>
          {name === 'twitter' ? 'mr_amed' : 'ahmedfaaid'}
        </span>
      )}
    </a>
  );
}
