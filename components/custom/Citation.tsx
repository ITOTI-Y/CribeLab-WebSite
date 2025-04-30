const Citation = ({ content }: { content: string }) => {
    return (
        <p className="text-gray-300 text-center w-full px-10 mx-auto mb-12 text-sm sm:text-base">
            {content}
        </p>
    )
}

export default Citation;
