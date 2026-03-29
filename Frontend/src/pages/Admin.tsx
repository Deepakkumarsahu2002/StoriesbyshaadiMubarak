import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Camera, Video, Upload, Trash2, LogIn, Lock, User, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import API from "@/services/api";

interface GalleryItem {
  _id: string;
  title: string;
  category: string;
  imageUrl: string;
}

interface VideoItem {
  _id: string;
  title: string;
  youtubeId: string;
}

const Admin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("adminToken"));
  const [activeTab, setActiveTab] = useState<'images' | 'videos'>('images');

  // LOGIN
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // IMAGES
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [images, setImages] = useState<GalleryItem[]>([]);

  // VIDEOS
  const [videos, setVideos] = useState<VideoItem[]>([]);
  const [vtitle, setVtitle] = useState("");
  const [youtubeId, setYoutubeId] = useState("");

  // ---------------- AUTH ----------------
  const handleLogin = async (e: any) => {
    e.preventDefault();
    try {
      const res = await API.post("/admin/login", { email, password });
      localStorage.setItem("adminToken", res.data.token);
      setIsLoggedIn(true);
    } catch {
      alert("Invalid login credentials");
    }
  };

  const logout = () => {
    localStorage.removeItem("adminToken");
    setIsLoggedIn(false);
  };

  // ---------------- LOAD DATA ----------------
  const loadImages = async () => {
    const res = await API.get("/gallery");
    setImages(res.data);
  };

  const loadVideos = async () => {
    const res = await API.get("/videos");
    setVideos(res.data);
  };

  useEffect(() => {
    if (isLoggedIn) {
      loadImages();
      loadVideos();
    }
  }, [isLoggedIn]);

  // ---------------- IMAGE ----------------
  const uploadImage = async () => {
    if (!file || !title || !category) return alert("Fill all fields");

    const formData = new FormData();
    formData.append("image", file);
    formData.append("title", title);
    formData.append("category", category);

    await API.post("/gallery", formData);
    setFile(null);
    setTitle("");
    loadImages();
  };

  const deleteImage = async (id: string) => {
    await API.delete(`/gallery/${id}`);
    loadImages();
  };

  // ---------------- VIDEO ----------------
  const addVideo = async () => {
    if (!vtitle || !youtubeId) return alert("Fill all fields");

    await API.post("/videos", { title: vtitle, youtubeId });
    setVtitle("");
    setYoutubeId("");
    loadVideos();
  };

  const deleteVideo = async (id: string) => {
    await API.delete(`/videos/${id}`);
    loadVideos();
  };

  // ---------------- LOGIN UI ----------------
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-6 relative">

        {/* Back to Main Site Button */}
        <Link 
          to="/" 
          className="absolute top-6 left-6 flex items-center gap-2 text-gold hover:text-gold-light transition-colors"
        >
          <ArrowLeft size={18} />
          <span className="text-sm uppercase tracking-widest">Back to Site</span>
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md">
          <div className="luxury-card p-8">
            <div className="text-center mb-8">
              <Lock className="w-12 h-12 text-gold mx-auto mb-4" />
              <h1 className="font-heading text-3xl text-foreground">Admin Login</h1>
              <p className="text-muted-foreground text-sm mt-2">Stories By Shaadi Mubarak Dashboard</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-gold text-sm uppercase tracking-widest mb-2">Email</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gold/50" />
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-background border border-border rounded-sm pl-11 pr-4 py-3 text-foreground focus:border-gold focus:outline-none"
                    placeholder="admin@studio.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gold text-sm uppercase tracking-widest mb-2">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gold/50" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-background border border-border rounded-sm pl-11 pr-4 py-3 text-foreground focus:border-gold focus:outline-none"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <Button variant="gold" className="w-full" type="submit">
                <LogIn className="mr-2" size={18} />Login
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    );
  }

  // ---------------- DASHBOARD ----------------
  return (
    <div className="min-h-screen bg-background">

      {/* Header */}
      <header className="bg-jet border-b border-border px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="font-heading text-2xl">
            <span className="text-foreground/70 text-lg mr-1">Stories By</span>
            <span className="text-gold">SHAADI</span>MUBARAK 
            <span className="text-muted-foreground text-sm ml-2">Admin</span>
          </h1>

          <Button variant="gold-outline" size="sm" onClick={logout}>
            Logout
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">

        {/* Tabs */}
        <div className="flex gap-4 mb-8">
          <button 
            onClick={() => setActiveTab('images')} 
            className={`flex items-center gap-2 px-6 py-3 transition-all ${activeTab === 'images' ? 'bg-gold text-primary-foreground' : 'border border-gold/50 text-gold hover:border-gold'}`}
          >
            <Camera size={18} />Images
          </button>

          <button 
            onClick={() => setActiveTab('videos')} 
            className={`flex items-center gap-2 px-6 py-3 transition-all ${activeTab === 'videos' ? 'bg-gold text-primary-foreground' : 'border border-gold/50 text-gold hover:border-gold'}`}
          >
            <Video size={18} />Videos
          </button>
        </div>

        {/* ---------------- IMAGES ---------------- */}
        {activeTab === 'images' ? (
          <div className="space-y-8">

            <div className="luxury-card p-6">
              <h2 className="font-heading text-xl text-foreground mb-4">Upload New Image</h2>

              <div className="grid md:grid-cols-2 gap-4">
                <label className="border-2 border-dashed border-gold/30 rounded-sm p-8 text-center hover:border-gold transition-colors cursor-pointer">
                  <Upload className="w-8 h-8 text-gold mx-auto mb-2" />
                  <p className="text-muted-foreground text-sm">
                    {file ? file.name : "Click to upload image"}
                  </p>
                  <input hidden type="file" onChange={(e) => setFile(e.target.files?.[0] || null)} />
                </label>

                <div>
                  <label className="block text-gold text-sm uppercase tracking-widest mb-2">Title</label>
                  <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full bg-background border border-border rounded-sm px-4 py-3 text-foreground focus:border-gold focus:outline-none mb-3"
                  />

                  <label className="block text-gold text-sm uppercase tracking-widest mb-2">Category</label>
                  <input
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full bg-background border border-border rounded-sm px-4 py-3 text-foreground focus:border-gold focus:outline-none"
                    placeholder="wedding, prewedding, candid..."
                  />

                  <Button variant="gold" className="w-full mt-4" onClick={uploadImage}>
                    Upload Image
                  </Button>
                </div>
              </div>
            </div>

            <div className="luxury-card p-6">
              <h2 className="font-heading text-xl text-foreground mb-4">Image Gallery</h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {images.map((img) => (
                  <div key={img._id} className="relative aspect-square group">
                    <img src={img.imageUrl} className="w-full h-full object-cover rounded-sm" />
                    <button
                      onClick={() => deleteImage(img._id)}
                      className="absolute top-2 right-2 w-8 h-8 bg-destructive text-destructive-foreground rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                ))}
              </div>
            </div>

          </div>
        ) : (

        /* ---------------- VIDEOS ---------------- */
          <div className="space-y-8">

            <div className="luxury-card p-6">
              <h2 className="font-heading text-xl text-foreground mb-4">Add YouTube Video</h2>

              <div className="grid md:grid-cols-2 gap-4">
                <input
                  value={vtitle}
                  onChange={(e) => setVtitle(e.target.value)}
                  placeholder="Video Title"
                  className="bg-background border border-border rounded-sm px-4 py-3 text-foreground focus:border-gold focus:outline-none"
                />
                <input
                  value={youtubeId}
                  onChange={(e) => setYoutubeId(e.target.value)}
                  placeholder="YouTube Video ID"
                  className="bg-background border border-border rounded-sm px-4 py-3 text-foreground focus:border-gold focus:outline-none"
                />
              </div>

              <Button variant="gold" className="mt-4" onClick={addVideo}>
                Add Video
              </Button>
            </div>

            <div className="luxury-card p-6">
              <h2 className="font-heading text-xl text-foreground mb-4">Video Library</h2>

              <div className="grid md:grid-cols-3 gap-4">
                {videos.map((v) => (
                  <div key={v._id} className="relative aspect-video group">
                    <img
                      src={`https://img.youtube.com/vi/${v.youtubeId}/hqdefault.jpg`}
                      className="w-full h-full object-cover rounded-sm"
                    />
                    <button
                      onClick={() => deleteVideo(v._id)}
                      className="absolute top-2 right-2 w-8 h-8 bg-destructive text-destructive-foreground rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
