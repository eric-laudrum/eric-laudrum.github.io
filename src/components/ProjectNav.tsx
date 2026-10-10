import styles from "../app/projects/page.module.css"

export default function ProjectNav({ active, setActive }: { active: string, setActive: (val: string) => void }) {
    
    const navItems = [ "Trellis", "Warble", "Trinket", "Trial By Fire" ];
    
    return (
        <div className={styles.projectNav}>
            {navItems.map((item) => (
                <a 
                    key={item}
                    className={active === item ? "nav-link-active" : "nav-link-item"}
                    onClick={() => setActive(item)}
                    style={{ cursor: 'pointer' }}
                >
                    {item}
                </a>
            ))}
        </div>
    );
}