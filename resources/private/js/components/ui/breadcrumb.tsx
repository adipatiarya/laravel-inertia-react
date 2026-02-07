import { cn } from '@@/lib/util';
import { BreadcrumbItem } from '@@/types';
import { admin_dashboard } from '@@/routes/index';
export default function Breadcrumb({ data }: { data: BreadcrumbItem[] }) {
    return (
        <ol className="breadcrumb float-xl-end">
            {[{ title: 'Dashboard', href: admin_dashboard.get().url } as BreadcrumbItem, ...data].map((i, idx) => {
                return (
                    <li className={cn('breadcrumb-item', !i.href && 'active')} key={idx}>
                        {i.href ? <a href={i.href}>{i.title}</a> : i.title}
                    </li>
                );
            })}
        </ol>
    );
}
