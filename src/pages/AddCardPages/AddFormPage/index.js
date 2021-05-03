import { Button, Card, CreditCard, Title } from '../../../components';
import { CardInfoForm } from './CardInfoForm';
import { CardCompanySelectModal } from './CardCompanySelectModal';
import {
  CARD_NUMBER_IN_STRING_LENGTH,
  EXPIRATION_DATE_IN_STRING_FORMAT_LENGTH,
  SECURITY_CODE_LENGTH,
  PASSWORD_IN_STRING_LENGTH,
  COLOR,
} from '../../../constants';
import {
  getNumberInString,
  getExpirationDateInString,
  getOwnerNameInString,
} from '../../../cardInfoFormatter';
import './style.css';

export const AddFormPage = (props) => {
  const { setRoute, initialCardInfo, cardInfo, setCardInfo, isModalOpen, setIsModalOpen } = props;
  const { cardNumbers, expirationDate, ownerName, company } = cardInfo;
  const numberInString = getNumberInString(cardNumbers);
  const expirationDateInString = getExpirationDateInString(expirationDate);
  const ownerNameInString = getOwnerNameInString({ ownerName, cardInfo });

  return (
    <div className="AddFormPage">
      <div className="AddFormPage__Title">
        <BackwardButton />
        <Title>카드 추가</Title>
      </div>
      <CreditCardPreview
        company={company}
        numberInString={numberInString}
        expirationDateInString={expirationDateInString}
        ownerNameInString={ownerNameInString}
      />
      <CardInfoForm
        setRoute={setRoute}
        initialCardInfo={initialCardInfo}
        cardInfo={cardInfo}
        setCardInfo={setCardInfo}
        setIsModalOpen={setIsModalOpen}
        isFormFulFilled={isFormFulFilled({
          numberInString,
          expirationDateInString,
          ownerNameInString,
          cardInfo,
          initialCardInfo,
        })}
      />
      <CardCompanySelectModal
        isOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        setCardInfo={setCardInfo}
      />
    </div>
  );
};

function BackwardButton() {
  const size = 16;
  const color = COLOR.LABEL;

  return (
    <Button theme="backward" onClick={() => {}}>
      <svg viewBox={`0 0 ${size} ${size}`} height={size} width={size} fill="none">
        <path d="M8.30426 1L1.36476 8.78658L9.15134 15.7261" stroke={color} strokeWidth="1.5" />
      </svg>
    </Button>
  );
}

function CreditCardPreview(props) {
  const { company, numberInString, expirationDateInString, ownerNameInString } = props;

  return (
    <div className="CreditCardPreview">
      <Card backgroundColor={company.color} boxShadow size="medium">
        <CreditCard
          cardCompany={company.name}
          cardNumber={numberInString}
          expirationDate={expirationDateInString}
          ownerName={ownerNameInString}
        />
      </Card>
    </div>
  );
}

function isFormFulFilled({
  numberInString,
  expirationDateInString,
  ownerNameInString,
  cardInfo,
  initialCardInfo,
}) {
  return (
    numberInString.length === CARD_NUMBER_IN_STRING_LENGTH &&
    expirationDateInString.length === EXPIRATION_DATE_IN_STRING_FORMAT_LENGTH &&
    expirationDateInString !== initialCardInfo.expirationDate &&
    ownerNameInString &&
    ownerNameInString !== initialCardInfo.ownerName &&
    cardInfo.securityCode.length === SECURITY_CODE_LENGTH &&
    Object.values(cardInfo.password).join('').length === PASSWORD_IN_STRING_LENGTH
  );
}