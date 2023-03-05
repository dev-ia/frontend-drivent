
// {!isReservation ? (
//         <Container>
//           <Row isDisplay={true}>
//             <Subtitle> Primeiro, escolha sua modalidade de ingresso </Subtitle>
//             <PaymentWrapper>
//               <SelectionButton
//                 type="submit"
//                 onClick={() => {
//                   changeButtonFirstSection(1);
//                   selectOptions(1);
//                 }}
//                 className={clickedButtonFirstSection === 1 ? 'clicked' : 'notClicked'}
//               >
//                 <GreyFont>Presencial</GreyFont>
//                 <PriceFont>R$ 250</PriceFont>
//               </SelectionButton>
//               <SelectionButton
//                 type="submit"
//                 onClick={() => {
//                   changeButtonFirstSection(2);
//                   selectOptions(2);
//                 }}
//                 className={clickedButtonFirstSection === 2 ? 'clicked' : 'notClicked'}
//               >
//                 <GreyFont>Online</GreyFont>
//                 <PriceFont>R$ 100</PriceFont>
//               </SelectionButton>
//             </PaymentWrapper>
//           </Row>
//           <Row isDisplay={isEnableDisplaySecondSection}>
//             <Subtitle> Ótimo! Agora escolha sua modalidade de hospedagem</Subtitle>
//             <PaymentWrapper>
//               <SelectionButton
//                 type="submit"
//                 onClick={() => {
//                   changeButtonSecondSection(1);
//                   setTicketTypeObject({ ...ticketTypeObject, price: 250 });
//                 }}
//                 className={clickedButtonSecondSection === 1 ? 'clicked' : 'notClicked'}
//               >
//                 <GreyFont>Sem Hotel</GreyFont>
//                 <PriceFont>+ R$ 0</PriceFont>
//               </SelectionButton>
//               <SelectionButton
//                 type="submit"
//                 onClick={() => {
//                   changeButtonSecondSection(2);
//                   setTicketTypeObject({ ...ticketTypeObject, price: 600, includesHotel: true });
//                 }}
//                 className={clickedButtonSecondSection === 2 ? 'clicked' : 'notClicked'}
//               >
//                 <GreyFont>Com Hotel</GreyFont>
//                 <PriceFont>+ R$ 350</PriceFont>
//               </SelectionButton>
//             </PaymentWrapper>
//           </Row>
//           <Row isDisplay={isEnableDisplayThirdSection}>
//             <Subtitle>{`Fechado! O total ficou em R$ ${ticketTypeObject.price}. Agora é só confirmar:`}</Subtitle>
//             <PaymentWrapper>
//               <ReserveButton type="submit">
//                 <ButtonFont onClick={() => reservation()}>RESERVAR INGRESSO</ButtonFont>
//               </ReserveButton>
//             </PaymentWrapper>
//           </Row>
//         </Container>
//       ) : (
//         <h1> reservado </h1>
//       )}

