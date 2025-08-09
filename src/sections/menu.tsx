export default function Menu() {
    return (
        <>
            <section id="menu" className="fixed left-0 top-0 z-50 w-full h-[90px] border-b border-[#292c36] bg-[var(--background)]">
                <div className="h-full flex justify-between items-center w-full mx-auto max-w-[1280px] px-10"> 
                    menu
                </div>
            </section>
            {/* Espaçador para compensar a altura do header fixo */}
            <div aria-hidden className="h-[90px]"></div>
        </>
    );
}