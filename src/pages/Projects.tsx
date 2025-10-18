import { useState, useEffect } from "react";
import { Search, MapPin, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface Project {
  id: string;
  title: string;
  category: string;
  type: string;
  location: string;
  status: string;
  priceRange: string;
  images: string[];
  areaAcres: number;
  amenities: string[];
  documents: Array<{ label: string; url: string }>;
  summary: string;
  postedAt: string;
  detailUrl?: string;
}

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");

  useEffect(() => {
    fetch("/data/projects.json")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setFilteredProjects(data);
      })
      .catch((err) => {
        console.error("Failed to load projects.json", err);
      });
  }, []);

  useEffect(() => {
    let filtered = projects;

    if (categoryFilter !== "All") {
      filtered = filtered.filter((p) => p.category === categoryFilter);
    }

    if (statusFilter !== "All") {
      filtered = filtered.filter((p) => p.status === statusFilter);
    }

    if (searchQuery) {
      filtered = filtered.filter(
        (p) =>
          p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.summary.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredProjects(filtered);
  }, [searchQuery, categoryFilter, statusFilter, projects]);

  const statusColors = {
    Ongoing: "bg-blue-500/10 text-blue-600 border-blue-200",
    Completed: "bg-green-500/10 text-green-600 border-green-200",
    Upcoming: "bg-orange-500/10 text-orange-600 border-orange-200",
  };

  const getImageSrc = (project: Project) => {
    const img = project.images?.[0];
    if (!img) return null;
    if (img.startsWith("/")) return img;
    return img;
  };

  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleViewDetails = (project: Project, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();

    // prefer explicit detailUrl
    if (project.detailUrl) {
      console.log("Opening detailUrl:", project.detailUrl);
      openInNewTab(project.detailUrl);
      return;
    }

    // prefer a document that looks like canvas/html
    const canvasDoc =
      project.documents?.find((d) => {
        const url = (d.url || "").toLowerCase();
        const label = (d.label || "").toLowerCase();
        return (
          url.endsWith("index.html") ||
          url.includes("canvas") ||
          label.includes("canvas") ||
          url.endsWith(".html")
        );
      }) || null;

    if (canvasDoc) {
      console.log("Opening canvasDoc:", canvasDoc.url);
      openInNewTab(canvasDoc.url);
      return;
    }

    // fallback to first document (pdf/zip)
    const firstDoc = project.documents?.[0];
    if (firstDoc) {
      console.log("Opening firstDoc:", firstDoc.url);
      openInNewTab(firstDoc.url);
      return;
    }

    // final fallback: open modal
    setSelectedProject(project);
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-secondary/50 to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 animate-fade-in">
            Our Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up">
            Explore our portfolio of meticulously planned developments across residential,
            commercial, and plotted land segments.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-background sticky top-20 z-40 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-grow max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
              <Input
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            <div className="flex gap-2 flex-wrap justify-center">
              <Button variant={categoryFilter === "All" ? "default" : "outline"} size="sm" onClick={() => setCategoryFilter("All")}>All Projects</Button>
              <Button variant={categoryFilter === "Homes" ? "default" : "outline"} size="sm" onClick={() => setCategoryFilter("Homes")}>Homes</Button>
              <Button variant={categoryFilter === "Hubs" ? "default" : "outline"} size="sm" onClick={() => setCategoryFilter("Hubs")}>Hubs</Button>
              <Button variant={categoryFilter === "Horizons" ? "default" : "outline"} size="sm" onClick={() => setCategoryFilter("Horizons")}>Horizons</Button>
            </div>

            <div className="flex gap-2">
              {["All", "Ongoing", "Completed", "Upcoming"].map((status) => (
                <Button key={status} variant={statusFilter === status ? "default" : "outline"} size="sm" onClick={() => setStatusFilter(status)}>{status}</Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground">No projects found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => {
                const imgSrc = getImageSrc(project);
                return (
                  <Card
                    key={project.id}
                    className="hover-lift cursor-pointer overflow-hidden animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                    onClick={() => setSelectedProject(project)}
                  >
                    <div className="relative h-56 bg-gradient-to-br from-primary/10 to-secondary/20 overflow-hidden">
                      {imgSrc ? (
                        <img src={imgSrc} alt={project.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-6xl font-serif font-bold text-primary/20 mb-2">{project.category}</div>
                        </div>
                      )}

                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

                      <div className="absolute top-4 right-4 z-10">
                        <Badge className={statusColors[project.status as keyof typeof statusColors]}>
                          {project.status}
                        </Badge>
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <Badge variant="outline" className="mb-3">{project.category}</Badge>
                      <h3 className="text-2xl font-serif font-bold mb-2">{project.title}</h3>
                      <div className="flex items-center text-sm text-muted-foreground mb-3">
                        <MapPin size={14} className="mr-1" />
                        {project.location}
                      </div>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{project.summary}</p>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-xs text-muted-foreground">Price Range</div>
                          <div className="text-lg font-bold text-primary">{project.priceRange}</div>
                        </div>
                        <TrendingUp className="text-green-600" size={24} />
                      </div>
                    </CardContent>

                    <CardFooter className="p-6 pt-0">
                      <Button variant="outline" className="w-full" onClick={(e) => handleViewDetails(project, e)}>
                        View Details
                      </Button>
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Project Detail Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-3xl font-serif">{selectedProject.title}</DialogTitle>
              </DialogHeader>

              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-muted-foreground">Category</div>
                    <div className="font-semibold">{selectedProject.category}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Type</div>
                    <div className="font-semibold">{selectedProject.type}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Location</div>
                    <div className="font-semibold">{selectedProject.location}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Status</div>
                    <Badge className={statusColors[selectedProject.status as keyof typeof statusColors]}>
                      {selectedProject.status}
                    </Badge>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Area</div>
                    <div className="font-semibold">{selectedProject.areaAcres} Acres</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Price Range</div>
                    <div className="font-semibold text-primary">{selectedProject.priceRange}</div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">About</h4>
                  <p className="text-muted-foreground">{selectedProject.summary}</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Amenities</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.amenities.map((amenity) => (
                      <Badge key={amenity} variant="secondary">{amenity}</Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Documents</h4>
                  <div className="space-y-2">
                    {selectedProject.documents.map((doc) => (
                      <a key={doc.label} href={doc.url} className="flex items-center text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                        📄 {doc.label}
                      </a>
                    ))}
                  </div>
                </div>

                <Button className="w-full" size="lg">Enquire Now</Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Projects;
