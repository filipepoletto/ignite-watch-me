import '../styles/header.scss';

interface HeaderProps {
  selectedGenre: any;
}

export function Header({ selectedGenre }: HeaderProps) {
  // Complete aqui
  return (
    <header>
      <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
    </header>
  )
}