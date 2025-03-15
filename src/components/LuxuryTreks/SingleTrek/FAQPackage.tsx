"use client"
import React, { useCallback, useState } from 'react'
import { LuxuryPackage } from './types'
import { Accordion, AccordionItem, Button } from '@nextui-org/react'
import { FaPlus } from 'react-icons/fa'
import { RxCross1 } from 'react-icons/rx'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { Selection } from '@react-types/shared'
import { antic } from '@/utility/font'

interface FAQ {
    question: string;
    answer: string;
}

interface FAQProps extends Omit<LuxuryPackage, 'faqs'> {
    faqs?: FAQ[];
}

const FAQPackage: React.FC<FAQProps> = ({ faqs = [] }) => {
    const [expandedKeys, setExpandedKeys] = useState<Selection>(new Set([]));

    const itemClasses = {
        title: "font-semibold text-base",
        trigger: "px-8 py-4 data-[hover=true]:bg-primary/20 bg-primary/5 rounded-sm h-18 flex items-center",
        indicator: "text-medium",
        content: "text-base text-justify pl-8",
    };

    const handleExpandAll = useCallback(() => {
        setExpandedKeys(expandedKeys === "all" ? new Set([]) : "all");
    }, [expandedKeys]);

    const handleSelectionChange = useCallback((keys: Selection) => {
        setExpandedKeys(keys);
    }, []);

    const isAllExpanded = expandedKeys === "all";

    return (
        <>
            <h1 className={`text-3xl ${antic.className} font-semibold text-primary my-8 `}>Frequently Asked Questions</h1>
            <div className="relative mt-12 lg:px-20 px-0">
                <Button 
                    onClick={handleExpandAll}
                    className="mb-4 text-primary bg-transparent absolute right-0 -top-[4.5rem]"
                    endContent={isAllExpanded ? <IoIosArrowUp className="text-primary" size={20} /> : <IoIosArrowDown className="text-primary" size={20} />}
                >
                    {isAllExpanded ? 'Collapse All' : 'Expand All'}
                </Button>
                <Accordion 
                    selectedKeys={expandedKeys}
                    onSelectionChange={handleSelectionChange}
                >
                    {faqs.map((item, index) => (
                        <AccordionItem
                            key={index.toString()}
                            aria-label={item.question}
                            title={item.question}
                            indicator={({ isOpen }) => (isOpen ? <RxCross1 className="text-primary" /> : <FaPlus className="text-primary" />)}
                            classNames={itemClasses}
                            className="py-2"
                        >
                            <p>{item.answer}</p>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </>
    );
};

export default FAQPackage;