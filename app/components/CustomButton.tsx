import type { Button } from "@/types"

export default function Button({ text, styles, event }: Button) {
    return (
        <button
            className={styles}
            onClick={event}
        >
            {text}
        </button>
    )
}