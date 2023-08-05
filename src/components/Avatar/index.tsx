import './avatar.scss';
import '../../assets/styles/common/utils.scss';

interface AvatarProps {
  hasBorder?: boolean;
  src: string;
}

export function Avatar({ hasBorder = true, src }: AvatarProps) {
  return (
    <img
      className={ hasBorder ? "avatar-with-border" : "avatar" }
      src={src} alt="Avatar do usuário"
    />
  );
}