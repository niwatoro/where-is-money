import { FC } from "react";
import { Company } from "@/scripts/types/company";
import { Layout } from "@/sections/components/Layout";
import styles from "@/styles/sections/CompanySection/index.module.css";
import { MoneyGraph } from "@/sections/CompanySection/components/MoneyGraph";
import { Link } from "@nextui-org/link";

type Props = {
  company: Company;
};
export const CompanySection: FC<Props> = ({ company }) => {
  return (
    <Layout>
      <div className={styles.container}>
        <div>
          <div className={styles.name}>{company.name}</div>
          <div>
            出典：
            <Link href={company.sourceUrl} target={"_blank"}>
              {company.sourceTitle}
            </Link>
          </div>
        </div>
        <MoneyGraph company={company} />
      </div>
    </Layout>
  );
};