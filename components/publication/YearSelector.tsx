"use client";

export default function YearSelector({ 
    years, 
    selectedYear, 
    onYearChange 
}: { 
    years: string[]; 
    selectedYear: string;
    onYearChange: (year: string) => void;
}) {
    return (
        <div className="flex justify-between items-center gap-4 px-4 py-4">
            <h1 className="text-white text-2xl font-bold">All Publications</h1>
            <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-14 gap-x-1 gap-y-1 bg-neutral-800 rounded-sm">
                {years.map((year) => (
                    <button
                        key={year}
                        onClick={() => onYearChange(year)}
                        className={`px-2 py-1 rounded-sm text-sm ${
                            selectedYear === year 
                                ? "text-white bg-neutral-600" 
                                : "text-gray-400"
                        } cursor-pointer hover:bg-neutral-600 transition-colors duration-300`}
                    >
                        {year}
                    </button>
                ))}
            </div>
        </div>
    );
}