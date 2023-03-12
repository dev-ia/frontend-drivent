import { ValidationFont, ValidationContainer } from '../Payment/notEnrolled';

export default function DoesNotIncludeHotel() {
  return (
    <>
      <ValidationContainer>
        <ValidationFont>Sua modalidade de ingresso não inclui hospedagem </ValidationFont>
        <ValidationFont> Prossiga para a escolha de atividades</ValidationFont>
      </ValidationContainer>
    </>
  );
}
