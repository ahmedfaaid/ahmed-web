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
      className={`flex items-center rounded-sm p-4 text-2xl transition-colors duration-300 ease-in-out hover:bg-[#eaecfa] dark:text-white dark:hover:bg-[#161e66] sm:text-4xl ${spacing}`}
      target='_blank'
      rel='noreferrer noopener'
    >
      <i
        className={`text-2xl ${
          name === 'twitter'
            ? 'devicon-twitter-original'
            : 'devicon-github-original'
        }`}
      />
      {showLabel && (
        <span className='ml-2 text-xl sm:text-2xl'>
          {name === 'twitter' ? 'mr_amed' : 'ahmedfaaid'}
        </span>
      )}
    </a>
  );
}
