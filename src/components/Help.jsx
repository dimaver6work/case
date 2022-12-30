import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { useState } from "react";

let items = [
  {
    id: 1,
    heading:
      "Я не нашел ответа на свой вопрос, у меня есть предложение или я заметил ошибку. Что делать?",
    content:
      "Связаться с нами вы можете в нашей группе ВКонтакте: https:// vk.com/karpevshop или же написав нам на почту: support@karpevshop.com",
  },
  {
    id: 2,

    heading: "На сайте реально окупиться и получить хороший дроп? ",
    content:
      "Конечно! На нашем сайте самый высокий процент окупаемости среди всех сайтов подобной тематики. Но вы должны понимать, что ваш выигрыш зависит от вашего везения. Никто не может гарантировать, окупитесь вы или нет.",
  },
  {
    id: 3,

    heading:
      "В течение какого времени я смогу получить золото на свой баланс в игре",
    content:
      " Мы выводим ваш выигрыш в течение 48 часов, но обычно вывод происходит гораздо быстрей",
  },
  {
    id: 4,

    heading: "Кто берёт комиссию внутриигрового рынка при выводе золота? ",
    content:
      "Комиссия рынка оплачивается нашим сайтом, чтобы на ваш баланс пришло ровно столько золота, сколько вы и выводили.",
  },
  {
    id: 5,

    heading: "Я хочу вывести скины/деньги, как это можно сделать?",
    content:
      "Наш сайт не является казино, поэтому вывод денег с сайта невозможен. Вывод скинов не предусмотрен самой игрой, поэтому мы можем выводить только золото на ваш баланс в игре.",
  },
  {
    id: 6,

    heading: "Почему я могу вывести минимум 10 золота?",
    content:
      "Это сделано для того, чтобы мы могли вам быстрее отправлять выигрыш.",
  },
  {
    id: 7,

    heading: "Я открыл кейсы и получил скины. Где их можно найти?",
    content:
      "Скины, которые вы выбили из кейсов, можно найти в своём личном кабинете. Там вы сможете продать эти предметы и получить деньги на ваш баланс на сайте.",
  },
  {
    id: 8,

    heading: "Как вывести золото с сайта?",
    content:
      'Для вывода золота необходимо перейти в свой личный кабинет. Далее нужно нажать на "вывести золото" и следуйте инструкциям.',
  },
  {
    id: 9,
    heading: "Как пополнить баланс на сайте?",
    content:
      'Для начала авторизуйтесь. Далее нажмите на "плюс" в правом верхнем углу и введите сумму, на которую хотите пополнить баланс. После этого нажимайте "пополнить баланс" и следуйте инструкциям.',
  },
];

const Help = () => {
  const [open, setOpen] = useState(false);
  const [activeButton, setActiveButton] = useState(null);

  return (
    <div className="accordeon">
      <Accordion allowMultipleExpanded>
        {items.map((item, index) => (
          <AccordionItem key={item.id}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div
                  className="heading"
                  onClick={() =>
                    activeButton === item.id
                      ? setActiveButton(null)
                      : setActiveButton(item.id)
                  }
                >
                  <div className="number">{item.id}</div>
                  <div className="heading_text"> {item.heading}</div>
                  <div
                    className={
                      activeButton === item.id ? "right acc_open " : "right"
                    }
                  >
                    {">"}
                  </div>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="content">{item.content}</div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Help;
