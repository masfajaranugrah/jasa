import { Accordion, AccordionItem } from "@nextui-org/react";

export default function Faq() {

  const data = [
    {
      id: "1",
      title: "Keuntungan pakai jasa kami",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      id: "2",
      title: "Kenapa harus memilih kami?",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      id: "3",
      title: "Bagaimana cara kerja layanan kami?",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ];

  return (
    <div className="container">
      <h1 className="text-center font-bold text-[40px] my-20">Pertanyaan Seputar <br /> Layanan</h1>
      <Accordion variant="splitted" className="mb-20">
        {data.map((item) => (
          <AccordionItem key={item.id} className="my-2" aria-label={item.title} title={item.title}>
            {item.content}
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
