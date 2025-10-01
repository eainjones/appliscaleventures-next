'use client';

import { useParams, useRouter, notFound } from 'next/navigation';
import { getCompanyById } from '@/data/portfolioCompanies';
import PortfolioCompanyPage from '@/components/PortfolioCompanyPage';

export default function CompanyPage() {
  const params = useParams();
  const router = useRouter();
  const companyId = params.companyId as string;

  if (!companyId) {
    notFound();
  }

  const company = getCompanyById(companyId);

  if (!company) {
    notFound();
  }

  const handleBack = () => {
    router.push('/#portfolio');
  };

  return <PortfolioCompanyPage company={company} onBack={handleBack} />;
}
