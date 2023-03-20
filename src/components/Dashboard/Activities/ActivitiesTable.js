import styled from 'styled-components';
import { ReactComponent as SoldOut } from '../../../assets/SVGs/SoldOut.svg';
import { ReactComponent as Group } from '../../../assets/SVGs/Group.svg';
import { ReactComponent as GreyLine } from '../../../assets/SVGs/GreyLine.svg';

export default function ActivitiesTable() {
  return (
    <>
      <NameRow>
        <ActiviesPlace> Auditório Principal </ActiviesPlace>
        <ActiviesPlace> Auditório Principal </ActiviesPlace>
        <ActiviesPlace> Auditório Principal </ActiviesPlace>
      </NameRow>
      <TablesPositioning>
        <ActiviesContainer>
          <ActivityContainer>
            <BiggerContainer>
              <ActivityName> Minecraft: montando o PC ideal</ActivityName>
              <ActivityHour> 09:00 - 10:00</ActivityHour>
            </BiggerContainer>
            <Middle>
              <GreyLine/>
            </Middle>
            <SmallerContainer>
              <Group/>
              <Vagas> 27 vagas </Vagas>
            </SmallerContainer>
          </ActivityContainer>
          <ActivityContainer>
            <BiggerContainer>
              <ActivityName> LoL: montando o PC ideal</ActivityName>
              <ActivityHour> 10:00 - 11:00</ActivityHour>
            </BiggerContainer>
            <Middle>
              <GreyLine/>
            </Middle>
            <SmallerContainer>
              <SoldOut/>
              <NoVacancy> Esgotado </NoVacancy>
            </SmallerContainer>
          </ActivityContainer>
        </ActiviesContainer>
        <ActiviesContainer>
          <ActivityContainer>
            <BiggerContainer>
              <ActivityName> Minecraft: montando o PC ideal</ActivityName>
              <ActivityHour> 09:00 - 10:00</ActivityHour>
            </BiggerContainer>
            <Middle>
              <GreyLine/>
            </Middle>
            <SmallerContainer>
              <Group/>
              <Vagas> 27 vagas </Vagas>
            </SmallerContainer>
          </ActivityContainer>
          <ActivityContainer>
            <BiggerContainer>
              <ActivityName> LoL: montando o PC ideal</ActivityName>
              <ActivityHour> 10:00 - 11:00</ActivityHour>
            </BiggerContainer>
            <Middle>
              <GreyLine/>
            </Middle>
            <SmallerContainer>
              <SoldOut/>
              <NoVacancy> Esgotado </NoVacancy>
            </SmallerContainer>
          </ActivityContainer>
        </ActiviesContainer>
        <ActiviesContainer>
          <ActivityContainer>
            <BiggerContainer>
              <ActivityName> Minecraft: montando o PC ideal</ActivityName>
              <ActivityHour> 09:00 - 10:00</ActivityHour>
            </BiggerContainer>
            <Middle>
              <GreyLine/>
            </Middle>
            <SmallerContainer>
              <Group/>
              <Vagas> 27 vagas </Vagas>
            </SmallerContainer>
          </ActivityContainer>
          <ActivityContainer>
            <BiggerContainer>
              <ActivityName> LoL: montando o PC ideal</ActivityName>
              <ActivityHour> 10:00 - 11:00</ActivityHour>
            </BiggerContainer>
            <Middle>
              <GreyLine/>
            </Middle>
            <SmallerContainer>
              <SoldOut/>
              <NoVacancy> Esgotado </NoVacancy>
            </SmallerContainer>
          </ActivityContainer>
        </ActiviesContainer>
      </TablesPositioning>
    </>
  );
}

const ActiviesPlace = styled.span`
    font-family: Roboto;
    font-size: 17px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: center;
    display: center;
    color: #7B7B7B;
`;

const ActiviesContainer = styled.div`
    width:288px;
    height:392px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    background-color:#FFFFFF;
    border: 1px solid #D7D7D7;
    padding:10px 12px 11px;
`;
const ActivityContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content:space-around;
  background: #F1F1F1;
  border-radius: 5px;
  margin-bottom:10px;
  padding-left:10px;
`;
const ActivityName = styled.span`
  font-family: Roboto;
  font-size: 12px;
  font-weight: 700;
  line-height: 14px;
  letter-spacing: 0em;
  text-align: left;
  color: #343434;
`;
const ActivityHour = styled.span`
  font-family: Roboto;
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: 0em;
  text-align: left;
  color:#343434;
  margin-top:6px;
`;
const BiggerContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-content:left;
  margin-top:12px;
`;
const SmallerContainer = styled.div`
  display:flex;
  flex-wrap:wrap;
  flex-direction:column;
  justify:content:center;
  align-content:center;
  text-align: center;
  margin-top:24px;
`;
const Vagas = styled.span`
  font-family: Roboto;
  font-size: 9px;
  font-weight: 400;
  line-height: 11px;
  letter-spacing: 0em;
  color:#078632;
  margin-top:4.5px;
`;
const NoVacancy = styled.span`
  font-family: Roboto;
  font-size: 9px;
  font-weight: 400;
  line-height: 11px;
  letter-spacing: 0em;
  text-align: center;
  color:#CC6666;
  margin-top:6.11px;
`;
const Middle = styled.div`
  margin-top:10px;
`;
const TablesPositioning = styled.div`
  display:flex;
  flex-wrap:table-row;
  flex-direction:row;
  justify-content:space-between;
`;
const NameRow = styled.div`
  width:8864px;
  height:20px;
  margin-bottom:7px;
  display:flex;
  flex-wrap:table-row;
  flex-direction:row;
  justify-content:space-between;
  margin-left:80px;
`;

