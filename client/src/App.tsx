import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Home from "@/pages/home";
import History from "@/pages/history";
import Accreditations from "@/pages/accreditations";
import CorporatePolicies from "@/pages/corporate-policies";
import Contact from "@/pages/contact";
import BusinessOpportunity from "@/pages/business-opportunity";
import JoinAuditors from "@/pages/join-auditors";
import JoinInstructors from "@/pages/join-instructors";
import JoinCollaborators from "@/pages/join-collaborators";
import KeyContacts from "@/pages/key-contacts";
import ISO9001 from "@/pages/iso-9001";
import ISO14001 from "@/pages/iso-14001";
import ISO45001 from "@/pages/iso-45001";
import ISO18788 from "@/pages/iso-18788";
import ISO50001 from "@/pages/iso-50001";
import ISO200001 from "@/pages/iso-20000-1";
import ISO21001 from "@/pages/iso-21001";
import ISO27001 from "@/pages/iso-27001";
import ISO37001 from "@/pages/iso-37001";
import ISO37301 from "@/pages/iso-37301";
import ISO22000 from "@/pages/iso-22000";
import ISO22301 from "@/pages/iso-22301";
import ISO54001 from "@/pages/iso-54001";
import ISO42001 from "@/pages/iso-42001";
import CertificateValidation from "@/pages/certificate-validation";
import CertificationPrograms from "@/pages/certification-programs";
import FAQ from "@/pages/faq";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about/history" component={History} />
      <Route path="/accreditations" component={Accreditations} />
      <Route path="/corporate-policies" component={CorporatePolicies} />
      <Route path="/contact" component={Contact} />
      <Route path="/business-opportunity" component={BusinessOpportunity} />
      <Route path="/join-auditors" component={JoinAuditors} />
      <Route path="/join-instructors" component={JoinInstructors} />
      <Route path="/join-collaborators" component={JoinCollaborators} />
      <Route path="/key-contacts" component={KeyContacts} />
      <Route path="/iso-9001" component={ISO9001} />
      <Route path="/iso-14001" component={ISO14001} />
      <Route path="/iso-45001" component={ISO45001} />
      <Route path="/iso-18788" component={ISO18788} />
      <Route path="/iso-50001" component={ISO50001} />
      <Route path="/iso-20000-1" component={ISO200001} />
      <Route path="/iso-21001" component={ISO21001} />
      <Route path="/iso-27001" component={ISO27001} />
      <Route path="/iso-37001" component={ISO37001} />
      <Route path="/iso-37301" component={ISO37301} />
      <Route path="/iso-22000" component={ISO22000} />
      <Route path="/iso-22301" component={ISO22301} />
      <Route path="/iso-54001" component={ISO54001} />
      <Route path="/iso-42001" component={ISO42001} />
      <Route path="/certificate-validation" component={CertificateValidation} />
      <Route path="/certification-programs" component={CertificationPrograms} />
      <Route path="/faq" component={FAQ} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
}

export default App;
