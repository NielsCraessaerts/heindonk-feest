"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { initSiteScripts } from "@/js/main";

export default function SiteScripts() {
    const pathname = usePathname();

    useEffect(() => {
        const cleanup = initSiteScripts();
        return cleanup;
    }, [pathname]);

    return null;
}
