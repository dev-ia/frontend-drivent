import { ValidationFont, ValidationContainer } from '../Payment/notEnrolled';

export default function NotPaid() {
  return (
    <>
      <ValidationContainer>
        <ValidationFont>Você precisa ter confirmado pagamento antes de fazer a escolha de hospedagem</ValidationFont>
      </ValidationContainer>
    </>
  );
}
