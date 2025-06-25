'use client'

import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { ChevronUpDownIcon } from '@heroicons/react/16/solid'
import { CheckIcon } from '@heroicons/react/20/solid'

interface YearSelectorProps {
    selectedYear: string;
    setSelectedYear: (year: string) => void;
    years: string[];
}

export default function YearSelector({ selectedYear, setSelectedYear, years }: YearSelectorProps) {
    const allyears = ['all', ...years]
    return (
        <div className="w-full flex-1">
            <Listbox value={selectedYear} onChange={setSelectedYear}>
                <div className="relative">
                    <ListboxButton
                        className="w-full flex justify-between items-center bg-white text-neutral-600 
                rounded-md px-4 py-1 gap-x-2 outline focus:outline-2 focus:outline-indigo-600">
                        <span className="">{selectedYear}</span>
                        <ChevronUpDownIcon className="w-4 h-4" />
                    </ListboxButton>

                    <ListboxOptions
                        transition
                        className="absolute max-h-60 w-full overflow-auto py-1 mt-1 z-10 rounded-md bg-white 
                    text-neutral-600 text-base shadow-lg ring-1 focus:outline-none sm:text-sm
                    transition duration-200 ease-out
                    data-[closed]:opacity-0 data-[closed]:scale-95
                    data-[enter]:duration-200 data-[enter]:ease-out
                    data-[leave]:duration-150 data-[leave]:ease-in
                    ">
                        {allyears.map((year) => (
                            <ListboxOption key={year} value={year}
                                className="group relative cursor-default select-none py-2 pl-3 text-gray-900
                            data-[focus]:bg-indigo-600 data-[focus]:text-white data-[focus]:outline-none">
                                <span className="block truncate font-normal group-data-[selected]:font-semibold">{year}</span>
                                <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600
                                group-[&:not([data-selected])]:hidden group-data-[focus]:text-white">
                                    <CheckIcon aria-hidden="true" className="size-5" />
                                </span>
                            </ListboxOption>
                        ))}
                    </ListboxOptions>
                </div>
            </Listbox>
        </div>
    )
}